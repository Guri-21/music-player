import tkinter as tk

window = tk.Tk()

def pr():
    print("Enter another label")

label1 = tk.Label(window, text="Label", font=("Arial", 24))
label1.pack(pady=20)

button1 = tk.Button(window, text="Click me", command=pr, font=("Calibri", 20))
button1.pack(pady=40)

window.mainloop()
