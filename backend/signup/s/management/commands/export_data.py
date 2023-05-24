import csv
from django.core.management.base import BaseCommand
from s.models import Signup  # replace with your own model

class Command(BaseCommand):
    help = 'Export data from SQLite database to CSV file'

    def handle(self, *args, **options):
        # get all data from your model
        queryset = Signup.objects.all()

        # specify the file name and location
        filename = 'data.csv'

        # open the file for writing
        with open('data.csv', 'w', newline='') as csvfile:
            # create a CSV writer object
            writer = csv.writer(csvfile)

            # write the header row
            writer.writerow(['id', 'username', 'email' 'password', 'image_url', ...])  # replace with your own field names

            # write each row of data
            for obj in queryset:
                writer.writerow([obj.id, obj.username, obj.email, obj.password, obj.image.url if obj.image else 'not found',  ])  # replace with your own fields

        # print a success message
        self.stdout.write(self.style.SUCCESS(f'Successfully exported data to {filename}'))
