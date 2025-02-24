import base64
import json

students24_path = "students24.json"

with open(students24_path, "r") as file:
    students24_json_data = file.read()

# Encode JSON data in Base64
students24_encoded_data = base64.b64encode(students24_json_data.encode()).decode()

# Save the Base64 encoded file as "s23.txt"
s23_file_path = "s23.txt"
with open(s23_file_path, "w") as s23_file:
    s23_file.write(students24_encoded_data)

# Return the new file path
s23_file_path
