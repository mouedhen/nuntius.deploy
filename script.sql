CREATE TABLE customers
(
  id                      INT UNSIGNED AUTO_INCREMENT
    PRIMARY KEY,
  label                   VARCHAR(191)                                     NOT NULL,
  label_id                INT UNSIGNED                                     NOT NULL,
  name                    VARCHAR(100)                                     NOT NULL,
  cin_passport            VARCHAR(191)                                     NULL,
  tax_registration_number VARCHAR(191)                                     NULL,
  phone_number            VARCHAR(191)                                     NULL,
  email                   VARCHAR(191)                                     NULL,
  category                ENUM ('particular', 'company') DEFAULT 'company' NOT NULL,
  address                 TEXT                                             NULL,
  created_at              TIMESTAMP                                        NULL,
  updated_at              TIMESTAMP                                        NULL,
  CONSTRAINT customers_label_unique
  UNIQUE (label)
)
  ENGINE = InnoDB;

CREATE TABLE locations
(
  id         INT UNSIGNED AUTO_INCREMENT
    PRIMARY KEY,
  label      VARCHAR(25)    NOT NULL,
  label_id   INT UNSIGNED   NOT NULL,
  longitude  DECIMAL(10, 7) NOT NULL,
  latitude   DECIMAL(10, 7) NOT NULL,
  address    TEXT           NULL,
  created_at TIMESTAMP      NULL,
  updated_at TIMESTAMP      NULL,
  CONSTRAINT locations_label_unique
  UNIQUE (label),
  CONSTRAINT locations_latitude_longitude_unique
  UNIQUE (latitude, longitude)
)
  ENGINE = InnoDB;

CREATE TABLE migrations
(
  id        INT UNSIGNED AUTO_INCREMENT
    PRIMARY KEY,
  migration VARCHAR(191) NOT NULL,
  batch     INT          NOT NULL
)
  ENGINE = InnoDB;

CREATE TABLE missions
(
  id                   INT UNSIGNED AUTO_INCREMENT
    PRIMARY KEY,
  label                VARCHAR(191)                                                         NOT NULL,
  label_id             INT                                                                  NOT NULL,
  estimated_start_date DATETIME                                                             NULL,
  estimated_end_date   DATETIME                                                             NULL,
  service_type         ENUM ('ground_work', 'planting') DEFAULT 'ground_work'               NOT NULL,
  customer_id          INT UNSIGNED                                                         NULL,
  location_id          INT UNSIGNED                                                         NULL,
  step                 ENUM ('plan', 'prepare', 'start', 'finish', 'cancel') DEFAULT 'plan' NOT NULL,
  created_at           TIMESTAMP                                                            NULL,
  updated_at           TIMESTAMP                                                            NULL,
  fuel_unit_price      DOUBLE(8, 2) DEFAULT '0.00'                                          NOT NULL,
  start_counter        TIME                                                                 NULL,
  end_counter          TIME                                                                 NULL,
  CONSTRAINT missions_label_unique
  UNIQUE (label),
  CONSTRAINT missions_customer_id_foreign
  FOREIGN KEY (customer_id) REFERENCES customers (id)
    ON DELETE CASCADE,
  CONSTRAINT missions_location_id_foreign
  FOREIGN KEY (location_id) REFERENCES locations (id)
    ON DELETE CASCADE
)
  ENGINE = InnoDB;

CREATE INDEX missions_customer_id_foreign
  ON missions (customer_id);

CREATE INDEX missions_location_id_foreign
  ON missions (location_id);

CREATE TABLE missions_delays_logs
(
  id                   INT UNSIGNED AUTO_INCREMENT
    PRIMARY KEY,
  mission_id           INT UNSIGNED NOT NULL,
  estimated_start_date DATE         NOT NULL,
  estimated_end_date   DATE         NOT NULL,
  delay_reason         TEXT         NOT NULL,
  created_at           TIMESTAMP    NULL,
  updated_at           TIMESTAMP    NULL,
  CONSTRAINT missions_delays_logs_mission_id_foreign
  FOREIGN KEY (mission_id) REFERENCES missions (id)
    ON DELETE CASCADE
)
  ENGINE = InnoDB;

CREATE INDEX missions_delays_logs_mission_id_foreign
  ON missions_delays_logs (mission_id);

CREATE TABLE oauth_access_tokens
(
  id         VARCHAR(100) NOT NULL
    PRIMARY KEY,
  user_id    INT          NULL,
  client_id  INT          NOT NULL,
  name       VARCHAR(191) NULL,
  scopes     TEXT         NULL,
  revoked    TINYINT(1)   NOT NULL,
  created_at TIMESTAMP    NULL,
  updated_at TIMESTAMP    NULL,
  expires_at DATETIME     NULL
)
  ENGINE = InnoDB;

CREATE INDEX oauth_access_tokens_user_id_index
  ON oauth_access_tokens (user_id);

CREATE TABLE oauth_auth_codes
(
  id         VARCHAR(100) NOT NULL
    PRIMARY KEY,
  user_id    INT          NOT NULL,
  client_id  INT          NOT NULL,
  scopes     TEXT         NULL,
  revoked    TINYINT(1)   NOT NULL,
  expires_at DATETIME     NULL
)
  ENGINE = InnoDB;

CREATE TABLE oauth_clients
(
  id                     INT UNSIGNED AUTO_INCREMENT
    PRIMARY KEY,
  user_id                INT          NULL,
  name                   VARCHAR(191) NOT NULL,
  secret                 VARCHAR(100) NOT NULL,
  redirect               TEXT         NOT NULL,
  personal_access_client TINYINT(1)   NOT NULL,
  password_client        TINYINT(1)   NOT NULL,
  revoked                TINYINT(1)   NOT NULL,
  created_at             TIMESTAMP    NULL,
  updated_at             TIMESTAMP    NULL
)
  ENGINE = InnoDB;

CREATE INDEX oauth_clients_user_id_index
  ON oauth_clients (user_id);

CREATE TABLE oauth_personal_access_clients
(
  id         INT UNSIGNED AUTO_INCREMENT
    PRIMARY KEY,
  client_id  INT       NOT NULL,
  created_at TIMESTAMP NULL,
  updated_at TIMESTAMP NULL
)
  ENGINE = InnoDB;

CREATE INDEX oauth_personal_access_clients_client_id_index
  ON oauth_personal_access_clients (client_id);

CREATE TABLE oauth_refresh_tokens
(
  id              VARCHAR(100) NOT NULL
    PRIMARY KEY,
  access_token_id VARCHAR(100) NOT NULL,
  revoked         TINYINT(1)   NOT NULL,
  expires_at      DATETIME     NULL
)
  ENGINE = InnoDB;

CREATE INDEX oauth_refresh_tokens_access_token_id_index
  ON oauth_refresh_tokens (access_token_id);

CREATE TABLE password_resets
(
  email      VARCHAR(191) NOT NULL,
  token      VARCHAR(191) NOT NULL,
  created_at TIMESTAMP    NULL
)
  ENGINE = InnoDB;

CREATE INDEX password_resets_email_index
  ON password_resets (email);

CREATE TABLE tasks
(
  id                  INT UNSIGNED AUTO_INCREMENT
    PRIMARY KEY,
  label               VARCHAR(191) NOT NULL,
  label_id            INT          NOT NULL,
  start_date_time     DATETIME     NOT NULL,
  end_date_time       DATETIME     NOT NULL,
  conductor           VARCHAR(191) NOT NULL,
  tractor             VARCHAR(191) NOT NULL,
  tool                VARCHAR(191) NOT NULL,
  tool_configuration  DOUBLE(8, 2) NOT NULL,
  depth_in_cm         DOUBLE(8, 2) NOT NULL,
  width_in_m          DOUBLE(8, 2) NOT NULL,
  average_speed       DOUBLE(8, 2) NOT NULL,
  worked_area         DOUBLE(8, 2) NOT NULL,
  average_consumption DOUBLE(8, 2) NOT NULL,
  fuel_consumption    DOUBLE(8, 2) NOT NULL,
  observation         TEXT         NULL,
  mission_id          INT UNSIGNED NOT NULL,
  created_at          TIMESTAMP    NULL,
  updated_at          TIMESTAMP    NULL,
  CONSTRAINT tasks_label_unique
  UNIQUE (label),
  CONSTRAINT tasks_mission_id_foreign
  FOREIGN KEY (mission_id) REFERENCES missions (id)
    ON DELETE CASCADE
)
  ENGINE = InnoDB;

CREATE INDEX tasks_mission_id_foreign
  ON tasks (mission_id);

CREATE TABLE users
(
  id             INT UNSIGNED AUTO_INCREMENT
    PRIMARY KEY,
  name           VARCHAR(191) NOT NULL,
  email          VARCHAR(191) NOT NULL,
  password       VARCHAR(191) NOT NULL,
  remember_token VARCHAR(100) NULL,
  created_at     TIMESTAMP    NULL,
  updated_at     TIMESTAMP    NULL,
  CONSTRAINT users_name_unique
  UNIQUE (name),
  CONSTRAINT users_email_unique
  UNIQUE (email)
)
  ENGINE = InnoDB;


