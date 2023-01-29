from django.contrib import admin

# Register your models here.




"""

from django.contrib import admin

# Register your models here.


# example, remove this once actual models have been implemented
from fitgarageapp.models import WorkoutClass, CustomUser

class WorkoutClassAdmin(admin.ModelAdmin):
    list_display = ('name', 'instructor', 'description', 'start', 'end')

class UserAdmin(admin.ModelAdmin):
    list_display = ('name', 'isAdmin', 'email', 'balance', 'password')

# registering the example model
admin.site.register(WorkoutClass, WorkoutClassAdmin)

admin.site.register(CustomUser, UserAdmin)

"""