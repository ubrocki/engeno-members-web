import json
from faker import Faker
import random

fake = Faker()

# Load existing data
with open('available-members.json') as f:
  data = json.load(f)

# Initialize counter for id
counter = 1

# Generate 50 more entries
for _ in range(50):
  random_number = random.randint(1, 100)

  if random_number <= 80:
    type = "private"
  else:
    type = "institutional"

  full_name = fake.last_name() + "," + fake.first_name()
  organisation_name = fake.company();

  data.append({
    "type": type,
     "id": "2023" + str(counter).zfill(5),  # Pad the counter with zeros
    "label1": organisation_name if type == "institutional" else full_name,
    "label2": full_name if type == "institutional" else "",
    "email": fake.email(),
    "shares": fake.random_int(min=1, max=10)
  })
  counter += 1  # Increment the counter

# Write back to the file
with open('available-members.json', 'w') as f:
  json.dump(data, f, indent=2)