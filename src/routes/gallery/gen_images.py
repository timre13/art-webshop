import requests
import json

def genImgTitle() -> str:
    print("Generating title", flush=True)
    return json.loads(requests.get("http://asdfast.beobit.net/api/?type=word&length=5").content)["text"].strip()[:-1]

def genImgDesc() -> str:
    print("Generating description", flush=True)
    return json.loads(requests.get("http://asdfast.beobit.net/api/?length=1").content)["text"].strip()

_images = []
def genImgUrl() -> str:
    if len(_images) == 0:
        print("Generating images", flush=True)
        _images.extend([x["url"] for x in json.loads(requests.get("https://api.thecatapi.com/v1/images/search?limit=100").content) if not x["url"].endswith(".gif")])
    return _images.pop().strip()


COUNT = 100

output = json.dumps([{"src": genImgUrl(), "title": genImgTitle(), "description": genImgDesc()} for _ in range(COUNT)], indent=4)
print(output)
