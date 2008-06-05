module Validateable
  [:save, :save!, :update_attribute].each{|attr| define_method(attr){}}

  def method_missing(symbol, *params)
    if(symbol.to_s =~ /(.*)_before_type_cast$/)
      send($1)
    end
  end

  def self.append_features(base)
    super
    base.send(:include, ActiveRecord::Validations)
    base.extend ClassMethods

    base.send :include, ActiveSupport::Callbacks
    base.define_callbacks *ActiveRecord::Validations::VALIDATIONS

  end

  module ClassMethods
    def human_attribute_name(attr)
        attr.humanize
    end
  end

end

