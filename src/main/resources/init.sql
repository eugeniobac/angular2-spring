INSERT INTO app_user(id, username, name ,password, active) VALUES (1, 'admin', 'Administrator' ,'$2a$10$wfUc57Xbt8cfI7j04nu9HuHXViVBA5BkSO7Xjlq/.5f4Y8B0AMIUC', true);
INSERT INTO role(id, code, name) VALUES (1, 'ADMIN','Administrator');
INSERT INTO app_user_roles (app_user_id, roles_id) VALUES (1, 1);

INSERT INTO app_user(id, username, name, password, active) VALUES (2, 'dev','Developer','$2a$10$EblZqNptyYvcLm/VwDCVAuBjzZOI7khzdyGPBr08PpIi0na624b8.', true);
INSERT INTO role(id, code, name) VALUES (2, 'DEV','Developer');
INSERT INTO app_user_roles (app_user_id, roles_id) VALUES (2, 2);