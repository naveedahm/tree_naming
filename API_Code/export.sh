mkdir code
aws lambda list-functions | grep FunctionName | cut -d '"' -f4 | while read -r name; do aws lambda get-function --function-name $name | tail -n 3 | egrep -o 'https?://[^ ]+' | sed 's/"//' | xargs wget -O ./code/$name.zip done