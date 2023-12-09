class Calculator(object):

    ''' Calculator class
            ndigit (int) : defaut 4 ,
    '''
    
    # define constructor method 
    def __init__(self, ndigit:int = 4, name = 'abc') -> object:

        ''' Calculator class
             ndigit (int) : defaut 4 ,
        '''

        self.ndigit=ndigit                          # default number of digits number should be round off 
        self.name=name

    def get_name(self,):

        return self.name
    
    # define a method to add two numbers
    def add(self, a:float = 0, b:float = 0) -> float:

        '''method to add two numbers
            a (float) : first digit
            b (second) : second digit
           Returns sum of a and b
        '''

        return round(a + b, self.ndigit)


    # define a method to divide two numbers
    def divide(self, a:float = 0, b:float = 1) -> float:

        ''' method to divide two numbers
        '''

        return round(a / b, self.ndigit)


class SciCalculator(Calculator):

    # define constructor method 
    def __init__(self, ndigit:int = 6) -> object:

        ''' Calculator class
             ndigit (int) : defaut 4 ,
        '''

        self.ndigit=ndigit                          # default number of digits number should be round off
        #super(SciCalculator,self).__init__(ndigit,'xyz')
        Calculator.__init__(self,ndigit,'xyz')

    def sqrt(self, a:float ):

        #super(SciCalculator,self).add(a,0)
        #Calculator.add(self,a,0)
        return round(a**(1/2), self.ndigit)

    
# class frange - works with floats 
class FRange(object):

    def __init__(self, start:float = 0.0, stop:float = 1.0,
                 gap:float = 0.1) -> object:

        ''' I don't know -  you write docstring for this
            class
        '''

        if not isinstance(start,(int,float)):
            raise ValueError('`start` must be of float type, but '
                             f'got {type(start)}.')
        self.start=start                    # starting value 
        self.stop=stop                      # stopping value 
        self.gap=gap                        # gap value
        self.current_value=None             # current value 


    # define method to make class as iterator 
    def __iter__(self):

        ''' method called by loop to make
            this class as iterator
        '''

        return self


    # define method called by `next` build-in method
    def __next__(self) -> float:

        ''' method called by `next` build-in method
        '''

        # starting pointing (current value) must be less than stopping point
        if self.current_value==None:
            self.current_value=self.start
            return self.current_value
        if self.current_value+self.gap<self.stop:            
            self.current_value+=self.gap                    # update starting value
            return self.current_value                       # return current value
        else:
            raise StopIteration                     # else raise StopIteration 
