import cv2
import base64
from openai import OpenAI
import os

# 1. API KEY SETUP
MY_API_KEY = "sk-proj-YOUR_ACTUAL_KEY_HERE" 
client = OpenAI(api_key=MY_API_KEY)

def start_robot():
    # Camera setup - CAP_DSHOW error prevent karne ke liye hai
    cap = cv2.VideoCapture(0, cv2.CAP_DSHOW)
    
    if not cap.isOpened():
        print("Error: Camera nahi khul raha!")
        return

    print("Camera Khul Gaya Hai... SPACE dabayein capture karne ke liye.")
    
    while True:
        ret, frame = cap.read()
        if not ret:
            continue
        
        cv2.imshow("Robot Eye", frame)
        
        key = cv2.waitKey(1) & 0xFF
        # SPACE dabane par photo save hogi
        if key == ord(' '):
            cv2.imwrite("robot_view.jpg", frame)
            print("Photo Capture Ho Gayi!")
            break
        # Q dabane par band hoga
        elif key == ord('q'):
            cap.release()
            cv2.destroyAllWindows()
            return
            
    cap.release()
    cv2.destroyAllWindows()
    
    # 2. AI Processing
    if os.path.exists("robot_view.jpg"):
        print("AI Soch Raha Hai...")
        try:
            with open("robot_view.jpg", "rb") as f:
                img_b64 = base64.b64encode(f.read()).decode('utf-8')
                
            res = client.chat.completions.create(
                model="gpt-4o-mini",
                messages=[{
                    "role": "user",
                    "content": [
                        {"type": "text", "text": "What is in front of the robot?"},
                        {"type": "image_url", "image_url": {"url": f"data:image/jpeg;base64,{img_b64}"}}
                    ]
                }]
            )
            print("\n" + "="*30)
            print("ROBOT BRAIN SAYS:", res.choices[0].message.content)
            print("="*30)
        except Exception as e:
            print(f"AI Error: {e}")
    else:
        print("Error: Photo save nahi ho saki, isliye AI nahi chala.")

if __name__ == "__main__":
    start_robot()