import tkinter
from tkinter import messagebox

class Application(object):

    def __init__(self,master:tkinter.Tk):

        self.master=master
        self.master.title('Some Silly Application')
        self.master.geometry('240x240')
        self.master.config(background='white')

        # frame a  
        self.frame_a=tkinter.Frame(self.master,bd=10,bg='white')
        self.frame_a.pack(fill=tkinter.BOTH,expand=tkinter.TRUE)
        self.entry_a=tkinter.Entry(master=self.frame_a,bg='red')
        self.entry_a.pack()
        self.label_a=tkinter.Label(master=self.frame_a,text='')
        self.button_a=tkinter.Button(master=self.frame_a,text='Read Entry',bg='green',
                                     command=lambda: self.label_a.config(
                                         text=self.entry_a.get()))
        self.button_a.pack()
        self.label_a.pack()
        
        # frame b 
        self.frame_b=tkinter.Frame(self.master)
        self.frame_b.pack(fill=tkinter.BOTH,expand=tkinter.TRUE)
        self.entry_b=tkinter.Entry(master=self.frame_b,bg='green')
        self.entry_b.pack(padx=2,pady=2)
        self.button_b=tkinter.Button(master=self.frame_b,text='Read Entry',bg='red',
                                     command=lambda: messagebox.showinfo(
                                         'Button',f'Text Entered: {self.entry_b.get()}'))
        self.button_b.pack(padx=2,pady=2)

        # frame c - divide in 2 parts
        self.frame_c=tkinter.Frame(self.master,bg='blue')
        self.frame_ca=tkinter.Frame(master=self.frame_c,bd=10)
        self.label_ca=tkinter.Label(master=self.frame_ca,text='Frame CA')
        self.label_ca.pack(side=tkinter.TOP)
        self.frame_cb=tkinter.Frame(master=self.frame_c,bg='white')
        self.label_cb=tkinter.Label(master=self.frame_cb,text='Frame CB in black',fg='white',
                                    bg='red')
        self.label_cb.pack(side=tkinter.LEFT)
        self.frame_ca.pack(side=tkinter.LEFT,fill=tkinter.BOTH,expand=tkinter.TRUE,padx=5,pady=5)
        self.frame_cb.pack(side=tkinter.RIGHT,fill=tkinter.BOTH,expand=tkinter.TRUE)
        self.frame_c.pack(fill=tkinter.BOTH,expand=tkinter.TRUE)

        # frame d - bottom 
        self.frame_d=tkinter.LabelFrame(master=self.master,text='Frame D',bd=10)
        self.frame_d.pack(side=tkinter.BOTTOM,fill=tkinter.BOTH,expand=tkinter.TRUE)
        

application=Application(tkinter.Tk())
tkinter.mainloop()      
