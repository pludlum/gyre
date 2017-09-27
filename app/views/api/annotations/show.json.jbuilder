json.extract! @annotation,
              :id,
              :user_id,
              :poem_id,
              :rating,
              :body,
              :start_idx,
              :end_idx,
              :source_text

json.username @annotation.user.username

json.votes @annotation.votes
