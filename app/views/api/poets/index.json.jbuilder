@poets.each do |poet|
  json.set! poet.id do
    json.extract! poet, :id, :name, :img_url, :banner_url, :description
  end
end
