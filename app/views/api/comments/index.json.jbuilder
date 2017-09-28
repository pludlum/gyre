@comments.each do |comment|
  json.set! comment.id do
    json.extract! comment,
                  :user_id,
                  :body
  end
end
