@comments.each do |comment|
  json.set! comment.id do
    json.extract! comment,
                  :id,
                  :user_id,
                  :body
    json.set! :user, comment.user.username
  end
end
