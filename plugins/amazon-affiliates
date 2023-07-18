module MyLiquidFilters
  # Checks if the post contains amazon affiliate links
  def has_amazon(input)
    input =~ /(https:\/\/amzn.to|tag=halfd0rk-20|amazon.com\/links\/blog)/i ? true : false
  end

  Liquid::Template.register_filter self
end