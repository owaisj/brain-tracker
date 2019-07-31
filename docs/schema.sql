CREATE TABLE Users (
  user_id int NOT NULL,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  bio TEXT,
  PRIMARY KEY(UserID)
);

CREATE TABLE Mood (
  mood_id int NOT NULL,
  mood_value int NOT NULL,
  user_id int,
  journal_entry TEXT NOT NULL,
  entry_timestamp TIMESTAMP NOT NULL CURRENT_TIMESTAMP,
  PRIMARY KEY(mood_id),
  FOREIGN KEY(UserID) REFERENCES Users(UserID)
);

CREATE TABLE Sleep (
  sleep_id int NOT NULL,
  sleep_value int NOT NULL,
  user_id int,
  journal_entry TEXT NOT NULL,
  entry_timestamp TIMESTAMP NOT NULL CURRENT_TIMESTAMP,
  PRIMARY KEY(sleep_id),
  FOREIGN KEY(user_id) REFERENCES Users(user_id)
);

CREATE TABLE Journal (
  entry_id int NOT NULL,
  entry TEXT NOT NULL,
  entry_timestamp TIMESTAMP NOT NULL CURRENT_TIMESTAMP, 
  user_id int,
  FOREIGN KEY (user_id) REFERENCES Users(user_id),
  PRIMARY KEY(entry_id)
);

CREATE TABLE Videos (
  video_id int NOT NULL,
  video_url int NOT NULL,
  user_id int,
  note TEXT NOT NULL,
  entry_timestamp TIMESTAMP NOT NULL CURRENT_TIMESTAMP,
  PRIMARY KEY(video_id),
  FOREIGN KEY(user_id) REFERENCES Users(user_id)
);

CREATE TABLE Articles (
  article_id int NOT NULL,
  article_url int NOT NULL,
  user_id int,
  note TEXT NOT NULL,
  entry_timestamp TIMESTAMP NOT NULL CURRENT_TIMESTAMP,
  PRIMARY KEY(article_id),
  FOREIGN KEY(user_id) REFERENCES Users(user_id)
);