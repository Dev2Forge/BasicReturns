export const codeExamples = [
  {
    title: 'DataAndMsgReturn in a service',
    code: `from BasicReturns import DataAndMsgReturn

def divide(a: float, b: float) -> DataAndMsgReturn:
    response = DataAndMsgReturn()
    try:
        if b == 0:
            raise ZeroDivisionError("Cannot divide by zero")
        response.data = a / b
        response.msg = "Division completed successfully"
    except Exception as exc:
        response.ok = False
        response.error = exc
        response.msg = "Division failed"
    return response`,
  },
  {
    title: 'FastAPI endpoint',
    code: `from fastapi import FastAPI
from BasicReturns import DataAndMsgReturn

app = FastAPI()

@app.get("/health", response_model=DataAndMsgReturn)
def health():
    status = DataAndMsgReturn(msg="Service ready", data={"uptime": "42s"})
    return status`,
  },
  {
    title: 'File helper with DataAndMsgReturn',
    code: `from BasicReturns import DataAndMsgReturn
from pathlib import Path

def ensure_file_exists(path: str) -> DataAndMsgReturn:
    ret = DataAndMsgReturn(msg="File check")
    if not Path(path).is_file():
        ret.ok = False
        ret.error = FileNotFoundError(path)
        ret.msg = "File not found"
    return ret`,
  },
]
