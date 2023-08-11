from .settings import *
import config

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'HOST': config.LOCAL_DB_HOST,
        'NAME': config.LOCAL_DB_NAME,
        'USER': config.LOCAL_DB_USER,
        'PASSWORD': config.LOCAL_DB_PASS,
    },
    'auth': {
        'ENGINE': 'django.db.backends.mysql',
        'HOST': config.LOCAL_AUTH_DB_HOST,
        'NAME': config.LOCAL_AUTH_DB_NAME,
        'USER': config.LOCAL_AUTH_DB_USER,
        'PASSWORD': config.LOCAL_AUTH_DB_PASS,
    }
}
