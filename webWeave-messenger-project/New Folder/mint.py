class ClassName(object):

    def __init__(self):

        print('Calling constructor of class')
        self.variable='public-variable'
        self._semiPrivate='should be but not'
        self.__private='must be private but not'

class ChildName(ClassName):

    pass 
class ParentA(object):

    def __init__(self, a:str = 'var_a'):

        self.variable_a=a

    def method(self, some_value):

        print(f'Value given to A.method is {some_value}')

class ParentB(object):

    def __init__(self, b:str = 'var_b'):

        self.variable_b=b

    def method(self):

        print('B.method is called')

class ChildAB(ParentA,ParentB):

    pass 

class ChildBA(ParentB,ParentA):

    pass
