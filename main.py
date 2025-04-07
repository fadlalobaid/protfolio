import requests
import string
import itertools

# توليد جميع الأسماء الرباعية الممكنة
def generate_usernames():
    chars = string.ascii_lowercase + string.digits  # الأحرف الإنجليزية + الأرقام
    return [''.join(p) for p in itertools.product(chars, repeat=4)]

# التحقق من توفر اسم المستخدم على TikTok
def check_username(username):
    url = f"https://www.tiktok.com/@{username}"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    }
    
    response = requests.get(url, headers=headers)
    return response.status_code == 404  # إذا كان 404، فاليوزر غير محجوز

# البحث عن يوزر رباعي متاح
def find_available_username():
    for username in generate_usernames():
        if check_username(username):
            print(f"متاح: {username}")
            break  # توقف عند العثور على أول اسم متاح

# تشغيل البحث
find_available_username()