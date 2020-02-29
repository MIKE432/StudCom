# StudCom

Small application to make information exchange (e.g exams photos) between students easier, I think...


# Instalation

## packages
yarn install in /frontend and /backend folders

## database
### create new database studcom  
*sudo -u **your user name** createdb studcom*

### fill created database with tables
need to go to /backend/sql folder and then paste this command: *psql -d studcom -c '\i create_database.sql'*

### delete database 
*sudo -u **your user name** dropdb studcom*
