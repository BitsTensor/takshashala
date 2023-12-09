# Source: https://docs.python.org/3/library/tkinter.html#coupling-widget-variables
# Coupling Widget Variables
import tkinter                                                      # load module


class Application(tkinter.Tk):


    # make class constructor
    def __init__(self,title:str='calculator',gemoetry:str='480x480')->tkinter.Tk:

        self.title(title)                                           # add title to application
        self.gemoetry(gemoetry)                                     # setup application size
        self._input_value=''                                        # setup current input tp calculator
        self.text_2_display=tkinter.StringVar()                     # make string variable to display output


    # define method to continuously updates input field whenever click a button
    def _click_button_action(self,inputs:str)->None:

        ''' update text to display and input value '''

        self._input_value+=str(inputs)                              # update input value 
        self.text_2_display.set(self._input_value)                  # setup text to display
        

    # method to clear the display
    def _clear_display(self)->None:

        ''' make clear display on pressed '''

        self._input_value=''                                        # make inputs to default
        self.text_2_display.set(self._input_value)                  # make clear display 


