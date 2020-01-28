FROM python:3.7-slim

WORKDIR /app

# Web port
EXPOSE 5000

# Install dependencies
ADD requirements.txt .
RUN pip install -r requirements.txt

# Add the code
ADD qa_app qa_app

# Set up the database
ADD db_create.py .
RUN python db_create.py

# Go go go
CMD ["python", "-m", "qa_app"]
