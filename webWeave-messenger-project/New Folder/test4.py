from abc import ABC,abstractmethod

class ArrayBaseClass(ABC):
                
    def __init__(self,iterable=list(),dtype:type=int):

        if isinstance(iterable,tuple):
            iterable=list(iterable)
        elif not isinstance(iterable,list):
            raise ValueError(f'`iterable` must be list type, but got -> {type(iterable)}.')

        for index,element in enumerate(iterable):
            if hasattr(element,'__len__') and (not isinstance(element,str)) and (not isinstance(element,Array)):
                iterable[index]=self.buildArray(element,dtype)
            elif not isinstance(element,dtype):
                try:
                    iterable[index]=dtype(element)
                except ValueError:
                    raise ValueError(f'Element in iterable - {element}, can\'t be type casted to `{dtype}` type!.')

            self.__array:list=iterable
            self.dtype:type=dtype


    @classmethod
    def buildArray(class_,iterable=list(),dtype:type=int):

        for index,element in enumerate(iterable):
            if hasattr(element,'__len__') and (not isinstance(element,str)) and (not isinstance(element,Array)):
                iterable[index]=self.buildArray(element,dtype)
            elif not isinstance(element,dtype):
                try:
                    iterable[index]=dtype(element)
                except ValueError:
                    raise ValueError(f'Element in iterable - {element}, can\'t be type casted to `{dtype}` type!.')
        return class_(iterable,dtype)


    # method to define the developer string 
    def __repr__(self)->str:

        ''' method to define developer string '''

        return f'array({self.__array}, dtype = {self.dtype.__name__})'


    # define string method
    def __str__(self)->str:

        ''' method define string conversion '''

        return str(self.__array).replace(',',' ')


    # define method to check/get shape of array (all elememt must be of equal length or must be of given dtype)
    def checkShape(self):

        if any([isinstance(element,Array) for element in self.__array]):
            if not all([isinstance(element,Array) for element in self.__array]):
                raise ValueError('`Input` data must be of same shape ! i.e. , a square or rectangle or must not have unequal sub-lists')
            all_lengths=[len(element) for element in self.__array]
            if all([sum(all_lengths)/len(all_lengths)==length for length in all_lengths]):
                raise ValueError('`Input` data must be of same shape ! i.e. , a square or rectangle or must not have unequal sub-lists')
                

        

class Array(ArrayBaseClass):


    def __init__(self,iterable=list(),dtype:type=int):

        super(Array,self).__init__(iterable,dtype)
        #self.checkShape()

    def method(self,):
        pass
