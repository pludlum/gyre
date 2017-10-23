@poems.each do |poem|
  json.set! poem.id do
    json.extract! poem, :id, :title, :author_id, :author, :poet
  end
end
