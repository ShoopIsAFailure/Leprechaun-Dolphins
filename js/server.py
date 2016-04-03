#check if new event is posted otherwise send back stored event
import cgi

def app(environ, start_response):

    if environ['REQUEST_METHOD'] == 'POST':
        post_env = environ.copy()
        post_env['QUERY_STRING'] = ''
        post = cgi.FieldStorage(
            fp=environ['wsgi.input'],
            environ=post_env,
            keep_blank_values=True
        )
        start_response('200 OK', [('Content-Type', 'text/html')])
        return ["your message was"+post["message"].value]
