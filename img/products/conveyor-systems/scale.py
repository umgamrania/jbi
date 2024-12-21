from sys import argv
from os import system

print(f"ffmpeg -i \"{argv[1]}\" -vf scale=iw/6:ih/6 \"com_{argv[1]}\"")
# system(f"rm \"{argv[1]}\"")
# system(f"mv \"com_{argv[1]}\" \"{argv[1]}\"")
