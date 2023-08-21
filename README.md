# florin_server
docker run --name florin-api -it -d -e POSTGRES_PASSWORD=supersecretpassword -e POSTGRES_USER=admin -e POSTGRES_DB=florinapi -p 5432:5432 postgres:14
