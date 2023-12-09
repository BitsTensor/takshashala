import os                                                           # load 
import datetime
from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_OAEP

secret_code='TH!$ @ $ECR3T C0D3 ; ! W!LL N0T T3LL Y0U'
file_name='k3y.key'
try:
    with open(file_name,mode='rb') as fileObject:
        data:list=fileObject.read()
    print('Readed data from file!')
except FileNotFoundError:
    print('No file present here ! address ->',os.path.join(os.getcwd(),file_name))
    print('Building new ... ')
    key=RSA.generate(2048)
    encrypted_key=key.export_key(passphrase=secret_code,pkcs=8,protection='scryptAndAES128-CBC')
    with open(file_name,mode='wb') as fileObject:
        fileObject.write(encrypted_key)
else:
    print('Recived key file - > ')
    for index,line in enumerate(data.decode().split('\n')):
        print(f'\tLine {index}: {line}')
    print('Loading key ... ')
    key=RSA.import_key(data,passphrase=secret_code)
    cryptr=PKCS1_OAEP.new(key)
    orginal_string='Hello! from Beast!'
    encrypted_string=cryptr.encrypt(orginal_string.encode('UTF-8'))
    decrypted_string=cryptr.decrypt(encrypted_string).decode('UTF-8')
    print('Encrypted string:',encrypted_string)
    print('Decrypted string:',decrypted_string)
    print('Is orginal_string==decrypted_string:',orginal_string==decrypted_string)
finally:
    print('All done !')



##def divide(a=0,b=1):
##
##    try: 
##        return a/b
##    except ZeroDivisionError:
##        if a==0: return float('nan')
##        elif a>0: return float('inf')
##        else: return  float('-inf')
##    except TypeError:
##        if isinstance(a,str) and isinstance(b,(int,float,complex)):
##            try:
##                return float(a)/b
##            except ValueError:
##                raise ValueError('`a` can be typecase to float / int'
##                                 f' got a -> {a}')
##        elif isinstance(b,str) and isinstance(a,(int,float,complex)):
##            try:
##                return a/float(b)
##            except ValueError:
##                raise ValueError('`b` can be typecase to float / int'
##                                 f' got b -> {b}')
##        elif isinstance(a,str) and isinstance(b,str):
##            try:
##                return float(a)/float(b)
##            except ValueError:
##                raise ValueError('`a` or `b` can be typecase to float / int'
##                                 f' got a -> {a} and b -> {b}')
##        else:
##            raise ValueError('`a` or `b` cannot be type casted to '
##                             f'int / float / complex , got a -> {a}'
##                             f' ({type(a)}) and b -> {b}  ({type(b)}) .')
    
##try:
##    unknow
##except Exception as error:
##    print(f'Got an error - > {error.__class__.__name__}: {error}')
