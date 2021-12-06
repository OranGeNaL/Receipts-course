install-image:
	docker pull nginx
start-front:
	docker run --name receipts-front -v CHANGE:/usr/share/nginx/html:ro -d -p 8081:80 nginx
