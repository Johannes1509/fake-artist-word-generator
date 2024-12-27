import json 
with open("words.json") as f:
    words = json.load(f)


category_items = {}


for item in words:
    current_category = item["category"]["en"]
    current_word = item["word"]["en"]
    if current_category not in category_items.keys():
        category_items[current_category] = []

    category_items[current_category].append(current_word)


words_count = 0
for k, v in category_items.items():
    words_count += len(v) 


for key, value in category_items.items():
    percentage = len(value)/words_count
    print(key, "Number of words:", len(value), "Percentage of all words:", percentage*100)
