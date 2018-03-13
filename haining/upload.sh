#!/bin/bash
zip -r -X dist.zip dist
scp dist.zip root@111.230.221.41:/usr/local/tomcat7/webapps
