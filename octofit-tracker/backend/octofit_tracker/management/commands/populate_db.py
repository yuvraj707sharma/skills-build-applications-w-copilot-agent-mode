from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        # Delete existing data
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # Create Teams
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')

        # Create Users
        users = [
            User.objects.create(name='Iron Man', email='ironman@marvel.com', team=marvel),
            User.objects.create(name='Captain America', email='cap@marvel.com', team=marvel),
            User.objects.create(name='Batman', email='batman@dc.com', team=dc),
            User.objects.create(name='Superman', email='superman@dc.com', team=dc),
        ]

        # Create Activities
        Activity.objects.create(user=users[0], type='Run', duration=30, calories=300)
        Activity.objects.create(user=users[1], type='Swim', duration=45, calories=400)
        Activity.objects.create(user=users[2], type='Bike', duration=60, calories=500)
        Activity.objects.create(user=users[3], type='Yoga', duration=50, calories=200)

        # Create Workouts
        Workout.objects.create(name='Morning Cardio', description='Cardio for all')
        Workout.objects.create(name='Strength Training', description='Strength for all')

        # Create Leaderboard
        Leaderboard.objects.create(user=users[0], points=100)
        Leaderboard.objects.create(user=users[1], points=90)
        Leaderboard.objects.create(user=users[2], points=110)
        Leaderboard.objects.create(user=users[3], points=95)

        self.stdout.write(self.style.SUCCESS('octofit_db populated with test data.'))
