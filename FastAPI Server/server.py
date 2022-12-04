import uvicorn
import contextlib
import threading
import time
import numpy as np
import shutil as sh
import os
import scipy.signal
import IPython
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
from datetime import datetime, timezone
from datetime import timedelta as td
from typing import List
from scipy.io import wavfile
import scipy.signal
import contextlib
import sys
import wave
import matplotlib.pyplot as plt
import librosa
import librosa.display
from spectrum import *
from matplotlib.ticker import (
    MultipleLocator, FormatStrFormatter, AutoMinorLocator)
from audio import *

app = FastAPI()

HOST_API = "localhost"
PORT_API = 8000

path = r'D:\app\PROJECT DULLOH\GUI-Andhika-dedi\FastAPI Server'
aud1 = []


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
    MJ_BG = r"voice2.wav"
    MD_BG = r"voice.wav"

    sr_MJ_BG, MJ_BG = read_audio(MJ_BG)
    sr_noise, MD_BG = read_audio(MD_BG)
    MJ_BG = MJ_BG.astype(float)
    MD_BG = generate_noise_sample(MD_BG, sr_noise, 2)

    output_BG = noise_red(MJ_BG, MD_BG, fft_size=4096, iterations=3)
    db = wavfile.write("BG Penulisan.wav", 44100, output_BG.astype(np.int16))
    AudioName2 = "BG Penulisan.wav"  # Audio File
    fs2, data2 = wavfile.read(AudioName2)
    convertFromPSD = 10**(-77/20)
    dB2 = data2*convertFromPSD

    fig, ax = plt.subplots(figsize=(20, 8))

    sinyal1 = WelchPeriodogram(dB2, NFFT=2048, sampling=fs2,
                               label="Stainless Steel", color="Orange")

    plt.ylabel('dB', size=17, font="Times New Roman")
    plt.xlim(2500, 8000)
    plt.xlabel('Frekuensi (Hz)', size=17, font="Times New Roman")
    ax.xaxis.set_major_locator(MultipleLocator(200))
    ax.yaxis.set_major_locator(MultipleLocator(5))
    ax.set_title('Analisis Frekuensi', size=24, font="Times New Roman")
    ax.legend(fontsize=18)
    plt.show()
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
