
json.extract! @comment,
              :id,
              :user_id,
              :annotation_id,
              :body


json.set! :user, @comment.user.username
