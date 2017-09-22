@poems.each do |poem|
  json.set! poem.id do
    json.extract! poem, :id, :title
  end
end
