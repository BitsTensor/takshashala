import tkinter as tk
from tkinter import messagebox

def show_selected():
    selected_text = ""
    for index in listbox.curselection():
        selected_text += listbox.get(index) + "\n"
    if selected_text:
        messagebox.showinfo("Selected Items", selected_text)
    else:
        messagebox.showwarning("No Selection", "No items selected.")

def show_menu_about():
    messagebox.showinfo("About", "This is a Tkinter Educational App.")

# Create the main application window
root = tk.Tk()
root.title("Tkinter Educational App")

# Button
button = tk.Button(root, text="Click Me!", command=lambda: messagebox.showinfo("Button", "Button was clicked!"))
button.pack(pady=10)

# Entry Widget
entry_label = tk.Label(root, text="Enter something:")
entry_label.pack()
entry = tk.Entry(root)
entry.pack(pady=5)

# Text Widget
text_label = tk.Label(root, text="Text Widget:")
text_label.pack()
text_widget = tk.Text(root, height=5, width=30)
text_widget.pack()

# Check Button
check_var = tk.StringVar()
check_button = tk.Checkbutton(root, text="Check me!", variable=check_var)
check_button.pack()

# Radio Buttons
radio_var = tk.StringVar()
radio_var.set("Option 1")
radio_button1 = tk.Radiobutton(root, text="Option 1", variable=radio_var, value="Option 1")
radio_button2 = tk.Radiobutton(root, text="Option 2", variable=radio_var, value="Option 2")
radio_button1.pack()
radio_button2.pack()

# Listbox
listbox_label = tk.Label(root, text="Select items from the list:")
listbox_label.pack()
listbox = tk.Listbox(root, selectmode=tk.MULTIPLE)
listbox.insert(1, "Item 1")
listbox.insert(2, "Item 2")
listbox.insert(3, "Item 3")
listbox.pack()

# Button to show selected items from listbox
show_selected_button = tk.Button(root, text="Show Selected Items", command=show_selected)
show_selected_button.pack(pady=10)

# Menu
menu_bar = tk.Menu(root)
root.config(menu=menu_bar)

file_menu = tk.Menu(menu_bar, tearoff=0)
menu_bar.add_cascade(label="File", menu=file_menu)
file_menu.add_command(label="Exit", command=root.quit)

help_menu = tk.Menu(menu_bar, tearoff=0)
menu_bar.add_cascade(label="Help", menu=help_menu)
help_menu.add_command(label="About", command=show_menu_about)

# Run the application
root.mainloop()
