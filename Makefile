BACKEND_EXEC = docker-compose exec backend

run:
	docker-compose up --remove-orphans

db-create:
	$(BACKEND_EXEC) npm run db:create

db-drop:
	$(BACKEND_EXEC) npm run db:drop

seed-users:
	$(BACKEND_EXEC) npm run seed:users

seed-questions:
	$(BACKEND_EXEC) npm run seed:questions

fresh-install: db-drop db-create seed-users seed-questions

.PHONY: run db-create db-drop seed-users seed-questions fresh-install
