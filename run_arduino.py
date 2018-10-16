import subprocess
import os
import warnings

warnings.filterwarnings('ignore')
cur_path = os.path.dirname(os.path.realpath(__file__))
ino_file_path = cur_path + '//test.ino'
compile_cmd = cur_path + '//arduino//arduino_debug --verify ' + ino_file_path
upload_cmd = cur_path + '//arduino//arduino_debug --verbose-build --upload ' + ino_file_path

try:
    subprocess.check_call(upload_cmd)
    proc = subprocess.Popen(upload_cmd, shell=True)
except Exception as e:
    print(e.message)
