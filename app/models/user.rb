class User < ApplicationRecord

    #the following relation is to allow other instances to have chums, and a current instance to be a chum (belonging to another instance)
    # belongs_to :an_account_owner, class_name: "User", optional: true

    has_many :posts
    has_many :comments
    # has_many :chums, class_name: "User", foreign_key: "an_account_owner_id"
    #the above, chums, is going to be used in displaying a particular instances list of friends, or chums 

    has_secure_password

    #DEPRECATION WARNING: Setting custom parent classes is deprecated and will be removed in future versions.
    # acts_as_followable
    # acts_as_follower

    validates :username, :email, uniqueness: true
    
end
