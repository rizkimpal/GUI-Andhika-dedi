import uvicorn
import contextlib
import threading
import time
import numpy as np
import shutil as sh
import os
import scipy.signal
import IPython
import sys
import wave
import matplotlib.pyplot as plt
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from scipy.io import wavfile
from spectrum import *
from matplotlib.ticker import (
    MultipleLocator, FormatStrFormatter, AutoMinorLocator)
from audio import *

app = FastAPI()

HOST_API = "localhost"
PORT_API = 8000

path = r'D:\app\PROJECT DULLOH\GUI-Andhika-dedi\dashboard\src\asset'
aud1 = []
sample = 0

def getBGaudio():
    MJ_BG = r"voiceDekat.wav"
    MD_BG = r"voiceJauh.wav"
    global sample
    sample = sample + 1
    sr_MJ_BG, MJ_BG = read_audio(MJ_BG)
    sr_noise, MD_BG = read_audio(MD_BG)
    MJ_BG = MJ_BG.astype(float)
    MD_BG = generate_noise_sample(MD_BG, sr_noise, 2)

    output_BG = noise_red(MJ_BG, MD_BG, fft_size=4096, iterations=3)
    db = wavfile.write(
        f'New Audio {sample}.wav', 44100, output_BG.astype(np.int16))
    return{print(f'terbuat Audio baru no: {sample}')
    }

@app.get("/ ")
def read_root():
    return {"Hello World"}


@app.post("/upload")
async def save(file: UploadFile = File(...)):
    contents = file.file.read()
    with open(f'{file.filename}', 'wb') as buffer:
        temp = buffer.write(contents)
    aud1.append(temp)
    return {
        print("successfully file", aud1)}


@app.get("/done")
async def save():
    getBGaudio()
    convertFromPSD = 10**(-77/20)
    x = 1
    sinyal = []
    fig, ax = plt.subplots(figsize=(20,8))
    while(x <= sample):
        AudioName = f"New Audio {x}.wav"  # Audio File
        fs, data = wavfile.read(AudioName)
        convertFromPSD = 10**(-70.5/20)
        dB = data*convertFromPSD
        sinyal.append(WelchPeriodogram(dB, NFFT=2048, sampling=fs,
                               label=f"sample{x}"))
        x += 1

    plt.ylabel('dB', size="24", font="Times New Roman")
    plt.xlim(2500, 8000)
    plt.xlabel('Frekuensi (Hz)', size=17, font="Times New Roman")
    ax.xaxis.set_major_locator(MultipleLocator(200))
    ax.yaxis.set_major_locator(MultipleLocator(5))
    ax.set_title('Analisis Frekuensi', size=24, font="Times New Roman")
    ax.legend(fontsize=18)
    plt.savefig(f'{path}\pfft.png')
    return{
        print("successfully done from bg penulisan")
    }

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Server(uvicorn.Server):
    def install_signal_handlers(self):
        pass

    @contextlib.contextmanager
    def run_in_thread(self):
        thread = threading.Thread(target=self.run)
        thread.start()
        try:
            while not self.started:
                time.sleep(1e-3)
            yield
        finally:
            self.should_exit = True
            thread.join()


config = uvicorn.Config(app=app, host=HOST_API,
                        port=PORT_API, log_level="info")
server = Server(config=config)

if __name__ == "__main__":
    with server.run_in_thread():
        while True:
            pass
