from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import contextlib
import threading
import time
from datetime import datetime
from datetime import datetime, timedelta, timezone
from lib2to3.pytree import Base
import numpy as np

app = FastAPI()

HOST_API = "localhost"
PORT_API = 8000


@app.get("/ ")
def read_root():
    return {"Hello World"}

@app.post("/upload")
def save(file: UploadFile = File(...)):
    audio_bytes = file.file.read()
    signal, sr = sf.read(io.BytesIO(audio_bytes))
    return f'{sr}'

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

config = uvicorn.Config(app=app, host=HOST_API, port=PORT_API, log_level="info")
server = Server(config=config)

if __name__ == "__main__":
    with server.run_in_thread():
        while True:
            pass

