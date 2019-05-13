def save_picture(backend, user, response, *args, **kwargs):
    if backend.name == "google-oauth2":
        picture = response.get("picture")
        user.picture = picture
        user.save()
