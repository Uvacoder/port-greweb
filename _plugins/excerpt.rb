module Jekyll
  class Post
    alias_method :original_to_liquid, :to_liquid
    def to_liquid(attrs = nil)
      data = (attrs.nil? ? original_to_liquid() : original_to_liquid(attrs))
      data.deep_merge({
        'excerpt' => content.match('<!-- more -->') ? content.split('<!-- more -->').first : nil
      })
    end
  end
  
  module Filters
    def mark_excerpt(content)
      content.gsub('<!--more-->', '<p><span id="more"></span></p>')
    end
  end
end
