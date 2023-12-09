import datetime


class InterestCalculator(object):

    def __init__(self, rate:float, time:float):

        self.rate=rate
        self.time=time


    def calculateSI(self, principal_amount:float)->float:

        return principal_amount*self.rate*self.time


    @property
    def differnceSIvsCI(self):

        unit_si=1.0*self.rate*self.time
        unit_ci=(1.0*(1+self.rate)**self.time)-1.0
        return unit_ci-unit_si

    @classmethod
    def buildBySI_n_time(class_, simple_interest:float, principal_amount:float,
                         time:float):

        rate = simple_interest/(principal_amount*time)
        return class_(rate, time)

    @classmethod
    def buildBySI_n_rate(class_, simple_interest:float, principal_amount:float,
                         rate:float):

        time = simple_interest/(principal_amount*rate)
        return class_(rate, time)

    @staticmethod
    def calculateDirectSI(principal_amount:float, rate:float, time:float):

        return principal_amount*rate*time
        

        
class AgeCalculator(object):

    def __init__(self, year:int, month:int, day:int,
                 hour:int=0,minutes:int=0,seconds:int=0):

        self.dob=datetime.datetime(year,month,day)


    def getAge(self):

        return datetime.datetime.now()-self.dob


    @property
    def ageInYears(self):

        return (datetime.datetime.now()-self.dob).days/365.25


    @classmethod
    def buildByAge(class_, ageInYears:float):

        dob = datetime.datetime.now()-datetime.timedelta(ageInYears*356.25)
        return class_(dob.year,dob.month,dob.day,dob.hour,dob.minute,dob.second) 
