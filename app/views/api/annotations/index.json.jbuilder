@annotations.each do |annotation|
  json.set! annotation.id do
    json.extract! annotation,
                  :id,
                  :user_id,
                  :poem_id,
                  :start_idx,
                  :end_idx,
                  :source_text,
                  :body
  end
end
