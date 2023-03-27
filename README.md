# yubi
yubi login app

## Endpoints

### GET /login
#### Request
```json
{
  "email": "yubi@gmail.com"
}
```
#### Response
##### Status Code 201
### POST /login
### PUT /login/id/:id
### DELETE /login/id/:id

### Snapshots

#### screen1_before_input
![screen1](/snapshots/screen1_before_input.png)

#### screen1_with_email
![screen1](/snapshots/screen1_with_email.png)

#### screen1_with_invalid_email
![screen1](/snapshots/screen1_with_invalid_email.png)

#### screen1_with_invalid_phone_number
![screen1](/snapshots/screen1_with_invalid_phone_number.png)

#### screen1_with_phone_number
![screen1](/snapshots/screen1_with_phone_number.png)

#### screen2_without_otp
![screen2](/snapshots/screen2_without_otp.png)

#### screen3_with_all_entries
![screen3](/snapshots/screen3_with_all_entries.png)

#### screen3_with_available_entries
![screen3](/snapshots/screen3_with_available_entries.png)
