# QA Engineer - Tech Test

### Introduction

Provided in this directory is a simple web application backend. Instructions on how to install and run the app are given below.

Your task is to identify the bugs and report them back to us!

It's up to you how you do this, but we'll want to re-run your API tests to verify the results, and for that we expect you to have chosen a suitable framework.

### Installation and running the sample app

Running one of the following options will create a test database at qa_app/test.db* and run a Flask server. Navigate to http://localhost:5000/v1/ui to see a graphical representation of the APIs and how to interact with them.

\* Option 1 below will create the test database inside the Docker image.


#### Option 1: using Docker (on Windows, MacOS or Linux)

If you have Docker installed, then run the following in the root of the technical test folder:

```bash
docker build -t sensynehealthqa:v1 .
docker run -p 5000:5000 -t sensynehealthqa:v1
```


#### Option 2: using MacOS/Linux

Assuming you are using a MacOS or Linux machine and Python3.6+, the following commands will get the application running:

```bash
python3 -m venv venv
source venv/bin/activate
pip3 install -r requirements.txt
python3 db_create.py
python3 -m qa_app
```
This will create a test database inside the qa_app directory and run a Flask server. Navigate to `localhost:5000/v1/ui` to see a graphical representation of the APIs and how to interact with them.


#### Option 3: using Windows

Windows often does not come with Python 3 pre-installed, but you can test this easily by opening up the Command Prompt and typing `python3`. Install Python if required (ideally >=3.7), then from the Command Prompt navigate to and inside the location of the QA Tech Test.


Then, similarly to MacOS/Linux:

```bash
python3 -m venv venv
venv/Scripts/activate.bat
pip3 install -r requirements.txt
python3 db_create.py
python3 -m qa_app
```


### Requirements

You may use any tools that you like and are not constrained to writing this in python. Any tool which is able to test this application is acceptable.

You must:

* Submit your completed solution either as link to a git repository (using a public repo service such as Github or Bitbucket), or as a zip file (making sure you include the .git directory). Commit early and often rather than in a single large commit; trial and error is acceptable and even encouraged as it really helps us capture your thinking.

* Your solution should contain instructions sufficient to allow a technical user to run and replicate your results (ideally like a README.md). Do not make any assumptions about the user's specific language or tool knowledge; for instance, do not assume that they know Java if you use a Java-based toolset.

* Produce a report highlighting any bugs in the application which you have found.

### Notes and suggestions:

* Solutions will be judged favourably if they demonstrate an ability to embed your tests in a framework suitable for a modern CICD pipeline. For instance, providing a Dockerfile with a suitable return code that could be executed in a pipeline is a benefit.

* We estimate this task should take no more than 1-2 hours once you have a suitable environment running. If it is taking you significantly longer than this, tidy up what you have and then submit it. This is not supposed to be a task to test your endurance and your work and thoughts will provide a valuable discussion point in any interview.
