install-image:
	docker pull nginx
start-front:
	CURRENT_FOLDER="$(pwd)";
	docker run --name receipts-front -v $CURRENT_FOLDER:/usr/share/nginx/html:ro -d -p 8081:80 nginx
