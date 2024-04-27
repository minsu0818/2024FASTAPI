# 2024FASTAPI1
FASTAPI를 이용한 IRIS 분류, 영화추천시스템, 캡스톤프로젝트

# 붓꽃 분류 시스템
 * 사용 데이터
   seaborn 라이브러리의 분꽃 데이터
   
 * iris model 만들기
 위의 데이터를 기반으로 irisModel.py를 이용하여 sepal_length, sepal_width, petal_length, petal_width의 값에 따라 분꽃의 종류를 선별하는 모델을 만든다.

# 일반 모델 api로 만들기 
 * Fastapi란 
   "FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.6+ based on standard Python type hints."
   -FastAPI 깃허브 페이지 출처

   이렇듯 fastapi는 파이썬 기반 오픈소스 웹 프레임워크인데 api서버용으로 사용된다.<br/>
   자신의 컴퓨터로만 돌리던 모델을 공용서버에 업로드하여 로컬에서도 사용할 수 있도록 할당하게 해준다.

 * Fastapi 사용하기 
   
![image](https://github.com/minsu0818/2024FASTAPI/assets/144076842/1719b977-653d-43dd-bfc0-f79ad13fdf5a)

   *



-------------------------------

개발 환경
﻿annotated-types==0.6.0
anyio==4.3.0
click==8.1.7
colorama==0.4.6
exceptiongroup==1.2.0
fastapi==0.110.0
h11==0.14.0
idna==3.6
joblib==1.3.2
numpy==1.26.4
pandas==2.2.1
pydantic==2.6.3
pydantic_core==2.16.3
python-dateutil==2.9.0.post0
pytz==2024.1
scikit-learn==1.4.1.post1
scipy==1.12.0
six==1.16.0
sniffio==1.3.1
starlette==0.36.3
threadpoolctl==3.3.0
typing_extensions==4.10.0
tzdata==2024.1
uvicorn==0.27.1
------------

# 영화추천시스템 
------------------------
개발환경
﻿annotated-types==0.6.0
anyio==4.3.0
certifi==2024.2.2
charset-normalizer==3.3.2
click==8.1.7
colorama==0.4.6
exceptiongroup==1.2.0
fastapi==0.110.0
h11==0.14.0
idna==3.6
implicit==0.7.2
numpy==1.26.4
pandas==2.2.1
pydantic==2.6.4
pydantic_core==2.16.3
python-dateutil==2.9.0.post0
pytz==2024.1
requests==2.31.0
scipy==1.12.0
six==1.16.0
sniffio==1.3.1
starlette==0.36.3
threadpoolctl==3.4.0
tqdm==4.66.2
typing_extensions==4.10.0
tzdata==2024.1
urllib3==2.2.1
uvicorn==0.28.1
