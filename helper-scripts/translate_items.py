import json 
import mtranslate

with open("words.json", encoding="utf-8") as f:
    words = json.load(f)

for w in words:
    current_word = w["word"]["en"]
    current_category = w["category"] ["en"]

    for new_lang in ["es", "fr", "tr"]:
        new_lang_word = mtranslate.translate(current_word, from_language="en", to_language=new_lang)
        new_lang_category = mtranslate.translate(current_category, from_language="en", to_language=new_lang)
        w["word"][new_lang] = new_lang_word
        w["category"][new_lang] = new_lang_category
        print(new_lang, current_word, new_lang_word.encode("utf-8"), current_category, new_lang_category.encode("utf-8"))
    

with open('words_new.json', 'w') as f:
    json.dump(words, f)