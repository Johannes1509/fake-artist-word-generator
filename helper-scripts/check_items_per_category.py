import json 
import matplotlib.pyplot as plt


with open("words.json") as f:
    words = json.load(f)


category_items = {}


for item in words:
    current_category = item["category"]["en"]
    current_word = item["word"]["en"]
    if current_category not in category_items.keys():
        category_items[current_category] = []

    category_items[current_category].append(current_word)


total_words_count = 0
for k, v in category_items.items():
    total_words_count += len(v) 

percentages_by_category = []
for key, value in category_items.items():
    percentages_by_category.append((len(value)/total_words_count)*100)

plt.figure(figsize=(8, 6))
plt.bar(category_items.keys(), percentages_by_category, alpha=0.8)
plt.title("Prozentualer Anteil der Wörter nach Kategorie")
plt.xlabel("Kategorie")
plt.ylabel("Prozent")
plt.ylim(0, max(percentages_by_category) + 10)

for i, percent in enumerate(percentages_by_category):
    plt.text(i, percent + 1, f"{percent:.1f}%", ha='center', fontsize=10)

plt.xticks(rotation=90)

plt.tight_layout()
plt.show()